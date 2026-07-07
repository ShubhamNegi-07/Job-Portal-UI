import Card from "./components/card"

const App = () => {

   const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKueq1tsHBNK-60iE4zuAMN8scsdu8Uy4ak9C7_S0nQ&s=10",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhSOhVxQMORW1hbzj3TeuvPiZNfgzz9erq0eyu1_zjw&s=10",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "London, UK",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91gke83AgsjipPMZmrsDP0-K7oWgm4ZCkxZNh9Exo3Q&s=10",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZEN2r056LDjjb6IT5qShwFPl4uJy1-BAgP0hGMmiqQ&s=10",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH_HAfShiIy_---9-GFR4MQwsLS4kqu-zVkAa6-kbzg&s=10",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    pay: "$56/hr",
    location: "Pune, India",
  },
   {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUKjFWDizIcm5drqniSODQ5YgztVV0sfUKv6H9tgjyA&s=10",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Frontend Software Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$46/hr",
    location: "San Francisco, USA",
  },
];

   return(
    <div className="parent">
      {jobOpenings.map (function(elem, idx){

        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay}
        datePosted={elem.datePosted} brandLogo={elem.brandLogo} location={elem.location}/>
        </div>
      })}

    </div>
  )
}

export default App