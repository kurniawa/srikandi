'use client'

import { useState } from "react";
import { retrieveAllDataInCollection } from "../lib/firebase/service";
import bcrypt from "bcrypt";

const SeederPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleSeeding = async () => {
        setIsLoading(true);
        const available_users = await retrieveAllDataInCollection('users');
        available_users.forEach(async (user:any) => {
            console.log(user);
            // await deleteDoc(doc(db, "users", user.id));
        });
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

// ,
//   "browser": {
//     "fs": false,
//     "os": false,
//     "path": false
//   }