function useLocalStorage(key , initialvalue){
  const [firstName , setfirstName]=useState(()=>{
    return JSON.parse(localStorage.getItem("FirstName")) || ""
})
useEffect(()=>{
    localStorage.setItem("FirstName" , JSON.stringify(firstName))
} , [firstName])


}
export default  useLocalStorage;