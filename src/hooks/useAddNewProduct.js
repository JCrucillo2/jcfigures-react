// firebase stuff
import { ref, push, set } from "firebase/database";
import { db, storage } from "libs/firebase";
import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

// react
import { useState } from "react";

function useAddNewProduct() {
    const [loading, setLoading] = useState(false);

    const productLoader = async function (productData, imageFile) {
        setLoading(true);

        const newRef = await push(ref(db, "products"));

        const imageRef = await storageRef(
            storage,
            `images/products/${imageFile.name}`
        );
        const uploadRef = await uploadBytes(imageRef, imageFile);
        const imageUrl = await getDownloadURL(imageRef);
        set(newRef, { ...productData });

        let results = Promise.all([newRef, imageRef, uploadRef, imageUrl]);

        results.then(() => {
            set(newRef, {
                ...productData,
                imageUrl,
                imageStoragePath: uploadRef.metadata.fullPath,
                uid: newRef.key,
            }).then(() => {
                setLoading(false);
            });
        });
    };

    return [loading, productLoader];
}

export { useAddNewProduct };