import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate()
    return(
        <>
            <h2>About</h2>
            <img src="https://picsum.photos/300/500?" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, exercitationem possimus cum reiciendis sed, quas ipsa consectetur cupiditate nam hic corporis necessitatibus laboriosam expedita velit! Distinctio in ipsum tenetur doloribus! </p>
            <button onClick={() => navigate ("/") } >Go to Home</button>

            <h3>This is below Browser Router</h3>
        </>
    )
}