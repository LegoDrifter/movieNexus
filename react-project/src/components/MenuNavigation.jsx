import Modal from "./Modal"

export default function MenuNavigation({open, closeFunc}){
    return (
    <Modal open={open}>
        <div className="w-[350px] h-full bg-slate-500">
        <h1>Life is good</h1>
        <button onClick={()=>{closeFunc((prev)=> !prev)}}>X</button>
        </div>
    </Modal>
    )
}