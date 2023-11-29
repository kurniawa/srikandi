'use client'

import { addDoc, collection } from "firebase/firestore";
import { users } from "./users_seeder";
import { db } from "@/firebase.config";
import bcrypt from "bcrypt";

const SeederPage = () => {
    const handleSeeding = () => {
        console.log('run seeding');
        users.forEach(async user => {
            const docRef = await addDoc(collection(db, "users"), {
                nama_lengkap: user.nama_lengkap,
                username: user.username,
                email: user.email,
                email_verified: user.email_verified,
                password: bcrypt.hash(user.password, 10),
            
            });
              console.log("User written with ID: ", docRef.id);
        });
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