import { Ifirebase } from "../../useCases/interface/service/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../webServer/config/config";

export class Firebase implements Ifirebase {
    async uploadOrganizerInfo(ownerId: object, insurance: object, license: object, passbook: object): Promise<string> {
        console.log("in first ", ownerId, insurance, license, passbook);
        console.log("comes into the Firebase store");

        // Access the type property on File objects
        console.log("ownerId:", ownerId);
        console.log("license:", license);
        console.log("insurance:", insurance);
        console.log("passbook:", passbook);

        console.log("after");

        const ownerIdRef = ref(storage, `/organizer/details/${new Date().getTime()}_${ownerId}`);
        const insuranceRef = ref(storage, `/organizer/details/${new Date().getTime()}_${insurance}`);
        const licenseRef = ref(storage, `/organizer/details/${new Date().getTime()}_${license}`);
        const passbookRef = ref(storage, `/organizer/details/${new Date().getTime()}_${passbook}`);

        console.log("after name");

        // Upload files
        // await Promise.all([
        //     uploadBytes(ownerIdRef, ownerId),
        //     uploadBytes(insuranceRef, insurance),
        //     uploadBytes(licenseRef, license),
        //     uploadBytes(passbookRef, passbook),
        // ]);

        console.log("after the uploading");

        // Get download URLs if needed
        const ownerIdURL = await getDownloadURL(ownerIdRef);
        const insuranceURL = await getDownloadURL(insuranceRef);
        const licenseURL = await getDownloadURL(licenseRef);
        const passbookURL = await getDownloadURL(passbookRef);

        return ownerIdURL;
    }
}
