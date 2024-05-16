console.log("");
console.log("************** DELIVERABLE 04 *********************");

interface Book {
    title: string;
    isRead: boolean;
}

const books: Book [] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true}
];

function isBookRead (books: Book[], titleToSearch: string): boolean | string {
    const itemBook = books.find(book => book.title === titleToSearch);

    if (itemBook) {
        return itemBook.isRead === true ? true : 
        `El libro "${titleToSearch}" no ha sido leido`;
    } else {
        return `El libro "${titleToSearch}" no se encuentra en el registro`
    }
}
 
console.log(isBookRead(books, "Canción de hielo y fuego"));