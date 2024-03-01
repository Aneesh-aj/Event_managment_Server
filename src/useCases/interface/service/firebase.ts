export interface Ifirebase{
    uploadOrganizerInfo(ownerId:File,insurance:File,license:File,passbook:File) : Promise <string>
}