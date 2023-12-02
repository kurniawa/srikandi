'use client'

import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { users } from "./users_seeder";
import { db } from "@/firebase.config";
// import bcrypt from "bcryptjs";
import { useState } from "react";
import { retrieveAllDataInCollection } from "../lib/firebase/service";

interface user_interface {
    id: string,
    nama_lengkap: string,
    username: string,
    password: string,
    email?: string,
    email_verified?: string,
    created_at?: number,
    updated_at?: number
}

const SeederPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleSeeding = async () => {
        setIsLoading(true);
        const available_users = await retrieveAllDataInCollection('users');
        available_users.forEach(async (user:any) => {
            console.log(user);
            // await deleteDoc(doc(db, "users", user.id));
        });
        // console.log('run seeding');
        // users.forEach(async user => {
        //     const docRef = await addDoc(collection(db, "users"), {
        //         nama_lengkap: user.nama_lengkap,
        //         username: user.username,
        //         email: user.email,
        //         email_verified: user.email_verified,
        //         password: bcrypt.hash(user.password, 10),
        //         created_at: Date.now(),
        //         updated_at: Date.now()
        //     });
        //       console.log("User written with ID: ", docRef.id);
        // });
        setIsLoading(false);
    }
    return ( 
        <main className="p-2">
            <h1 className="text-xl">Seeder Page</h1>
            <div className="flex gap-3 mt-5">
                <button className="btn btn-error">delete all data</button>
                <button className="btn btn-primary" onClick={handleSeeding}>run seeding</button>
            </div>
        </main>
     );
}
 
export default SeederPage;