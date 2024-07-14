import About from "./About";
import Courses from "./Courses";
import Photo from "./Photo";
import "./App.css";
import Footer from "./Footer";
import Motivation from "./Motivation";
import Materials from "./Materials";


const courses =[
    {
        id:0,
        firstname:'Crash Course for NEET',
        lastname:'For Class 12th Passed Students (Regular & Online)',
        link:'Click here to enroll',
    },
    {
        id:1,
        firstname:'Repeaters Hybrid Course for NEET',
        lastname:'For Class 12th Passed Students (Regular)',
        link:'Click here to enroll',
    },
    {
        id:2,
        firstname:'Regular Hybrid Course for NEET',
        lastname:'For Class 12th Studying/Appering Students (Weekdays & Weekend Batch)',
        link:'Click here to enroll',
    },
    {
        id:3,
        firstname:'One-Year Hybrid Course for NEET',
        lastname:'For Class 11th Studying Students moving to Class 12th (Weekend Batch)',
        link:'Click here to enroll',
    },
    {
        id:4,
        firstname:'Two-Year Hybrid Course for NEET',
        lastname:'For Class 10th Studying Students moving to Class 11th (Weekend Batch)',
        link:'Click here to enroll',
    }
]

function App(){
    return(
        <>
        <div class="header">
    <h1 class="h1">
    <span class="a">POINT</span>
    <span class="b"> ACADEMY</span>
    </h1>
    <h3>+91 94426 61621 | 0431-2317505 | info@pointacademy.org.in</h3>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <Photo/>
        <h1 class="h2">ABOUT</h1>
        <About/>
        <Courses courses={courses}/>
        <Motivation/>
        <Materials/>
        <Footer/>
        </>

    )
}

export default App;