import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";

import { db } from "libs/firebase";

function useGetProducts() {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        async function getProductData() {
            const productRef = ref(db, "products");
            const productDataSnapShot = await get(productRef);
            setProductData(Object.values(productDataSnapShot.val()));
        }
        getProductData();
    }, []);

    return productData;
}

export { useGetProducts };
