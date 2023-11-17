import React, {useState} from 'react'
import Spinner from './Spinner';
import Footer from './Footer';

const work = [
    {
      id: '1',
      title: 'Biology',
      courseCode: 'Matric',
      company: 'AKSGDN',
    },
    {
        id: '2',
        title: 'Mathematics',
        courseCode: 'Matric',
        company: 'AKSGDN',
    },
    {
        id: '3',
        title: 'Physics',
        courseCode: 'Matric',
        company: 'AKSGDN',
    },
    {
        id: '4',
        title: 'Chemistry',
        courseCode: 'Matric',
        company: 'AKSGDN',
    },
    {
        id: '5',
        title: 'Urdu',
        courseCode: 'Matric',
        company: 'AKSGDN',
    },
    {
        id: '6',
        title: 'English',
        courseCode: 'Matric',
        company: 'AKSGDN',
    },
    {
        id: '7',
        title: 'Islamiat',
        courseCode: 'Matric',
        company: 'AKSGDN',
    },
    {
        id: '8',
        title: 'Pakistan Studies',
        courseCode: 'Matric',
        company: 'AKSGDN',
    },
    {
        id: '9',
        title: 'Computer Science',
        courseCode: 'Intermediate',
        company: 'AKHSS',
    },
    {
        id: 10,
        courseCode: 'CL-117',
        title: 'Intro to Info. and Comm. Technologies',
        company: 'FAST-NUCES',
    },
    {
        id: 11,
        courseCode: 'CS-118',
        title: 'Programming Fundamentals',
        company: 'FAST-NUCES',
    },
    {
        id: 12,
        courseCode: 'CS-217',
        title: 'Object Oriented Programming',
        company: 'FAST-NUCES',
    },
    {
        id: 13,
        courseCode: 'CS-2001',
        title: 'Data Structures',
        company: 'FAST-NUCES',
    },
    {
        id: 14,
        courseCode: 'EE-2003',
        title: 'Computer Organization and Assembly Language',
        company: 'FAST-NUCES',
    },
    {
        id: 15,
        courseCode: 'CS-2006',
        title: 'Operating Systems',
        company: 'FAST-NUCES',
    },
    {
        id: 16,
        courseCode: 'CS-3005',
        title: 'Theory of Automata',
        company: 'FAST-NUCES',
    },
    {
        id: 17,
        courseCode: 'CL-2005',
        title: 'Database',
        company: 'FAST-NUCES',
    },
    {
        id: 18,
        courseCode: 'CS-2009',
        title: 'Design and Analysis of Algorithms',
        company: 'FAST-NUCES',
    },
    {
        id: 19,
        courseCode: 'CS-3004',
        title: 'Software Design and Analysis',
        company: 'FAST-NUCES',
    },
    {
        id: 20,
        courseCode: 'CS-3006',
        title: 'Parallel and Distributed Computing',
        company: 'FAST-NUCES',
    },
    {
        id: 21,
        courseCode: 'AI-2002',
        title: 'Artifical Intelligence',
        company: 'FAST-NUCES',
    },
    {
        id: 22,
        courseCode: 'CS-3001',
        title: 'Computer Networks',
        company: 'FAST-NUCES',
    },
    {
        id: 23,
        courseCode: 'CS-3009',
        title: 'Software Engineering',
        company: 'FAST-NUCES',
    },
    {
        id: 24,
        courseCode: 'CS-4051',
        title: 'Information Retrieval',
        company: 'FAST-NUCES',
    },
    {
        id: 25,
        courseCode: 'CS-3002',
        title: 'Information Systems',
        company: 'FAST-NUCES',
    },
    {
        id: 26,
        courseCode: 'CS-4067',
        title: 'DevOps',
        company: 'FAST-NUCES',
    },
    {
        id: 27,
        courseCode: 'CS-4103',
        title: 'Requirement Engineering and Software and Systems',
        company: 'FAST-NUCES',
    },
    {
        id: 28,
        courseCode: 'EE-117',
        title: 'Applied Physics',
        company: 'FAST-NUCES',
    },
    {
        id: 29,
        courseCode: 'MT-119',
        title: 'Calculus and Analytical Geometry',
        company: 'FAST-NUCES',
    },
    {
        id: 30,
        courseCode: 'SS-150',
        title: 'English Composition and Comprehension',
        company: 'FAST-NUCES',
    },
    {
        id: 31,
        courseCode: 'EE-227',
        title: 'Digital Logic Design',
        company: 'FAST-NUCES',
    },
    {
        id: 32,
        courseCode: 'SS-113',
        title: 'Pakistan Studies',
        company: 'FAST-NUCES',
    },
    {
        id: 33,
        courseCode: 'SS-152',
        title: 'Communication & Presentation Skills',
        company: 'FAST-NUCES',
    },
    {
        id: 34,
        courseCode: 'MT-224',
        title: 'Differential Equations (Cal II)',
        company: 'FAST-NUCES',
    },
    {
        id: 35,
        courseCode: 'CS-1005',
        title: 'Discrete Structures',
        company: 'FAST-NUCES',
    },
    {
        id: 36,
        courseCode: 'EE-2003',
        title: 'Computer Organization and Assembly Language',
        company: 'FAST-NUCES',
    },
    {
        id: 37,
        courseCode: 'MG-1001',
        title: 'Fundamentals of Management',
        company: 'FAST-NUCES',
    },
    {
        id: 38,
        courseCode: 'MT-1004',
        title: 'Linear Algebra',
        company: 'FAST-NUCES',
    },
    {
        id: 39,
        courseCode: 'CS-2008',
        title: 'Numerical Computing',
        company: 'FAST-NUCES',
    },
    {
        id: 40,
        courseCode: 'SS-2003',
        title: 'Psychology',
        company: 'FAST-NUCES',
    },
    {
        id: 41,
        courseCode: 'MT-2005',
        title: 'Probability and Statistics',
        company: 'FAST-NUCES',
    },
    {
        id: 42,
        courseCode: 'MT-3001',
        title: 'Graph Theory',
        company: 'FAST-NUCES',
    },
    {
        id: 43,
        courseCode: 'SS-2007',
        title: 'Technical and Business Writing',
        company: 'FAST-NUCES',
    },
    {
        id: 44,
        courseCode: 'CS-4001',
        title: 'Professional Practices in IT',
        company: 'FAST-NUCES',
    },
    {
        id: 45,
        courseCode: 'CS-4091',
        title: 'Final Year Project – I',
        company: 'FAST-NUCES',
    }
];

export default function Certificates(props){
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    return(
        <>
            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <h1 style={{marginTop: "80px", fontWeight: "bold" }}>MY EDUCATIONS</h1>
            </div>

            {loading && <Spinner />}

            {!loading && <>
                <div className="container">
                    <div className="row">
                        {work.map((element)=>{
                            return <div className = "col-md-4 d-flex justify-content-center mt-3" key={element.id}>
                                        <div className="my-3 mt-3">
                                            <div className="card" style={{width: "23rem", height: "6.5rem"}}>
                                            <div>
                                                <span className="badge rounded-pill bg-danger" style = {{disply:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>{element.company}</span>
                                            </div>
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{fontWeight: "bold"}}>{element.title}</h5>
                                                    <h6 className="card-title">{element.courseCode}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
                <Footer title="Insha Samnani - BSCS (FAST-NUCES)" />
            </>
            }
        </>
    )
}