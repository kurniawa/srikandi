'use client'

import { useState } from "react";
import { retrieveAllDataInCollection } from "../lib/firebase/service";
import bcryptjs from "bcryptjs";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { products, users } from "./users_seeder";

const SeederPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleUserSeeding = async () => {
        setIsLoading(true);
        setFeedback('');
        // USER SEEDING
        const available_users = await retrieveAllDataInCollection('users');
        available_users.forEach(async (user:any) => {
            // console.log(user);
            await deleteDoc(doc(db, "users", user.id));
        });
        users.forEach(async (user) => {
            await setDoc(doc(collection(db, "users")), {
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                email_verified: user.email_verified,
                password: bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(10)),
                // password: bcryptjs.hash(user.password, 10),
                tempat_lahir: user.tempat_lahir,
                tanggal_lahir: user.tanggal_lahir,
                role: user.role,
                created_at: Date.now(),
                updated_at: Date.now(),
              });
        });
        // END - USER SEEDING
        setIsLoading(false);
        setFeedback('seeding complete.')
    }

    const handleProductsSeeding = async () => {
        setIsLoading(true);
        setFeedback('');
        
        const all_products = await retrieveAllDataInCollection('products');
        all_products.forEach(async (product:any) => {
            // console.log(product);
            await deleteDoc(doc(db, "products", product.id));
        });
        products.forEach(async (product) => {
            await setDoc(doc(collection(db, "products")), {
                tipe_barang: product.tipe_barang,
                tipe_perhiasan: product.tipe_perhiasan,
                jenis_perhiasan: product.jenis_perhiasan,
                range_usia: product.range_usia,
                warna_emas: product.warna_emas,
                mata: product.mata,
                plat: product.plat,
                cap: product.cap,
                ukuran: product.ukuran,
                nampan: product.nampan,
                merk: product.merk,
                edisi: product.edisi,
                kadar: product.kadar,
                berat: product.berat,
                kondisi: product.kondisi,
                nama: product.nama,
                deskripsi: product.deskripsi,
                status: product.status,
                stok: product.stok,
                barcode: product.barcode,
                keterangan: product.keterangan,
              });
        });
        
        setIsLoading(false);
        setFeedback('seeding complete.')
    }
    return ( 
        <main className="p-2">
            <h1 className="text-xl">Seeder Page</h1>
            <div className="flex gap-3 mt-5">
                <button className="btn btn-error" onClick={handleUserSeeding} disabled={isLoading}>
                    users_seeder {isLoading && <span className="loading loading-infinity"></span>}
                </button>
                <button className="btn btn-primary" onClick={handleProductsSeeding} disabled={isLoading}>
                    products_seeder {isLoading && <span className="loading loading-infinity"></span>}
                </button>
            </div>
            <div>{feedback && <span>{feedback}</span>}</div>
        </main>
     );
}
 
export default SeederPage;

// ,
//   "browser": {
//     "fs": false,
//     "os": false,
//     "path": false
//   }