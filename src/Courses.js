function Courses({courses}){

const listItems = courses.map(courses =>

    <div>
    <h2>{courses.firstname}</h2>
    <p>{courses.lastname}</p>
    <h5><a href="http://127.0.0.1:5500/my-project/src/application%20form.html"> {courses.link}</a></h5>

    
    </div>
);

return(
    <>
    <h1 class="h2">COURSES WE OFFER</h1>
    <ul>{listItems}</ul>
    </>
)

}

export default Courses;