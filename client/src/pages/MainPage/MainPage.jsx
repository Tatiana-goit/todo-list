import Header from "../../components/Header/Header"
import CardView from "../../components/CardView/CardView"
import todoLists from "../../data/todoLists"

export default function MainPage() {
  return (
    <>
    <Header/>
    <CardView todoLists={todoLists}/>
    </>
  )  
};
