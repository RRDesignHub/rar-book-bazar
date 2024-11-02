const getReadBooks = ()=>{
  const existingLSData = localStorage.getItem('read-list');
  if(existingLSData){
    const existingReadBooksArr = JSON.parse(existingLSData);
    return existingReadBooksArr;
  }else{
    return [];
  }
}


const addReadBooksToLS = (id)=>{
  const existingLSReadList = getReadBooks();
  if(existingLSReadList.includes(id)){
    console.log("Already enlisted the book.")
  }else{
    existingLSReadList.push(id);
    const newReadList = JSON.stringify(existingLSReadList);
    localStorage.setItem('read-list', newReadList);
  }

}

export { addReadBooksToLS, getReadBooks }