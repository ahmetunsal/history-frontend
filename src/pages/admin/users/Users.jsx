import React, { useContext, useEffect, useMemo, useState } from "react";
import { roleConditions } from "../../../utils/config";
import { context } from "../../../_context/GlobalContext";
import Tables from "../../../components/tables/Tables";
import AddBookModal from "../../../components/modal/AddBookModal";
import DeleteBookModal from "../../../components/modal/delete/DeleteBookModal";
import EditBookModal from "../../../components/modal/edit/EditBookModal";
import { Link } from "react-router";
import AddUserModal from "../../../components/modal/add/AddUserModal";
import DeleteUserModal from "../../../components/modal/delete/DeleteUserModal";

const Books = () => {
  const { user, getAllUsers } = useContext(context);
  const [loading, setLoading] = useState(true);
  const [bookList, setBookList] = useState([]);
  const [open, setOpen] = useState(false);

  const [bookEditOpen, setBookEditOpen] = useState(false);
  const [bookDeleteOpen, setBookDeleteOpen] = useState(false);
  const [userObject, setBookObject] = useState();
  
  const [deneme, setDeneme] = useState(false);

  useEffect(() => {
    const bookStatus = async () => {
      try {
        const response = await getAllUsers(); // API çağrısı
        // console.log("SA", response);
        // console.log("Bayi Status:", response.data); // Gelen veriyi kontrol et
        setBookList(response.data); // 🟢 Yalnızca `results` dizisini kaydet
      } catch (error) {
        //console.error("Bayi Status Error:", error); // Hataları kontrol et
      } finally {
        setLoading(false); // Yükleme durumunu kapat
      }
    };

    bookStatus();
  }, []);
  
  
  useEffect(() => {
    const bookStatus = async () => {
      try {
        const response = await getAllUsers(); // API çağrısı
        // console.log("SA", response);
        // console.log("Bayi Status:", response.data); // Gelen veriyi kontrol et
        setBookList(response.data); // 🟢 Yalnızca `results` dizisini kaydet
      } catch (error) {
        //console.error("Bayi Status Error:", error); // Hataları kontrol et
      } finally {
        setLoading(false); // Yükleme durumunu kapat
      }
    };

    bookStatus();
  }, [deneme]);

  const handleEdit = async (obj) => {
    setBookObject(obj);
    setBookEditOpen(!bookEditOpen)
  }

  const handleDelete = async (obj) => {
    setBookObject(obj);
    setBookDeleteOpen(!bookDeleteOpen)
  }

  const hiddenColumns = [
    "username",
    "created_at",
    "updated_at",
    "address",
    "is_staff"
  ]; //

  const columns = useMemo(() => {
    if (!bookList || bookList.length === 0 || !bookList[0]) return [];

    return [
      ...Object.keys(bookList[0] || {})
        .filter((key) => !hiddenColumns.includes(key))
        .map((key) => ({
          name: key.replace(/_/g, " ").toUpperCase(),
          selector: (row) => {
            const value = row[key];

            if (!value) return "Veri Yok";

            // Eğer yayınevi objeyse
            if (key === "is_active") return value ? "Aktif" : "Pasif";

            // Eğer kapak görseliyse
            if (key === "profile_picture")
              return <img src={value} alt="Kapak" width="50" />;

            return value;
          },
          sortable: true,
        })),
      {
        name: "İşlemler",
        cell: (row) => (
          <div style={{ display: "flex", gap: "10px" }}>
            {/* Düzenle Butonu */}
            <button
              style={{
                backgroundColor: "#ffc107",
                color: "black",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
              onClick={() => handleEdit(row)}
            >
              Düzenle
            </button>

            {/* Sil Butonu */}
            <button
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
              onClick={() => handleDelete(row)}
            >
              Sil
            </button>
            
            
            <Link
              to={`/book-detail/${row.id}`}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Detay
            </Link>
          </div>
        ),
      },
    ];
  }, [bookList, hiddenColumns]);

  //   if (!roleConditions[user.role]) return <>Not found.</>;
  if (loading) return <>Loading...</>;

  return (
    <>
        <div className="flex justify-end">
            <button onClick={() => setOpen(!open)} className="bg-black text-white hover:cursor-pointer my-5 mx-5 py-3 px-2 rounded-2xl">
                Üye Ekle
            </button>
        </div>
      <Tables columns={columns} data={bookList} loading={loading} />
      <AddUserModal deneme={deneme} setDeneme={setDeneme} open={open} setOpen={setOpen} />
      <EditBookModal deneme={deneme} setDeneme={setDeneme} userObject={userObject} open={bookEditOpen} setOpen={setBookEditOpen} />
      <DeleteUserModal deneme={deneme} setDeneme={setDeneme} userObject={userObject} open={bookDeleteOpen} setOpen={setBookDeleteOpen} />
    </>
  );
};

export default Books;
