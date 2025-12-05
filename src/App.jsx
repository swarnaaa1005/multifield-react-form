import Greeting from "./components/Greeting"
import Profile from "./components/Profile"
import Profilelist from "./components/Profilelist"
import Tasks from "./components/Tasks"
import Welcome from "./components/Welcome"
import Events from "./components/Events"
import BookList from "./components/Booklist"
import Counter from "./components/Counter"
import Users from "./components/Users"
import SimpleForm from "./components/SimpleForm"
import MultiFieldForm from "./components/MultiFieldForm"
import Task1 from "./components/Task1"
import Portfolio from "./components/Portfolio"
import Sample from "./components/Sample"




function App(){
  // const person1={
  //   name:"Rose",
  //   img:"https://th.bing.com/th/id/R.bc205eac509090ba026433b1565bc18a?rik=1BblnGHP1wqVYA&riu=http%3a%2f%2fwww.perfocal.com%2fblog%2fcontent%2fimages%2f2021%2f01%2fPerfocal_17-11-2019_TYWFAQ_100_standard-3.jpg&ehk=MXaB6gPhPiykBuERz%2bfG0C9O7kxtvL6qKybZiRVExMI%3d&risl=&pid=ImgRaw&r=0",
  //   phone:9876789876,
  //   email:"rose@gmail.com"
  // }
  // const person2={
  //   name:"Jack",
  //   img:'https://tse4.mm.bing.net/th/id/OIP.nny0d7WiZeJB_whAcx5HTAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3',
  //   phone:9870089876,
  //   email:"jack@gmail.com"
  // }
  //  const person3={
  //   name:"Alice",
  //   img:'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg',
  //   phone:9870089876,
  //   email:"alice@gmail.com"
  //  }
  return(
    <>

    {/* <h1 class="text-3xl font-bold underline text-blue-800">
    User Names
  </h1> */}
    
      <Portfolio></Portfolio>
   
    {/*
     <Sample></Sample>
    
    
 
    <Task1></Task1>
    <MultiFieldForm></MultiFieldForm>
     <SimpleForm></SimpleForm>
    <Users></Users>
    <BookList></BookList>
     <Counter size={3}></Counter>
    
     <Events></Events>
   <Tasks></Tasks>
   <Profilelist></Profilelist>
   <Profile person={person1}></Profile>
    <Profile person={person2}></Profile>
    <Profile person={person3}></Profile>

    <Welcome></Welcome>
    <Greeting text="Kottayam"/>
    <Greeting text="India"/>
    <h1 style={{color:'yellow',backgroundColor:'black'}}>Welcome to React Day 1</h1> */}
    </>
  )
}
export default App
