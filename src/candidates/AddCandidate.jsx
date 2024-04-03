import { useState, useRef, useEffect } from "react";
import { Typography, Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCandidate = () => {
    const [image, setImage] = useState(null);
    const hiddenFileInput = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: 'AMAN KUMAR',
        reg_no: 'A7/IND/7667',
        fathers_name: 'MR. ALOK NATH',
        to: '17-09-2023',
        ref_no: 'BU88-98897-989',
        from: '17-06-2023',
        centre_head: 'PRAKASH JHA',
        date_of_issue: '17-06-2023',
        grade: 'A+',
        image: 'https://images.unsplash.com/photo-1602133187081-4874fdbd555c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        company_name: 'M-TECH WEB DEVELOPMENT',
        logo: "/logo.png",
        services: 'Services include Static & Dynamic Website Development, Android & iOS App Development,API Development (Laravel, Django), and hands-on training with real projects during internships.',
        address: 'Road No.4, Saguna More(Near Indane Gas Godown) Ramkrishna Nagar, Patna-800027',
        phone: '+91-8789529215',
        email: 'code@mohallaacademy.com',
        website: 'www.MohallaAcademy.com',
        pan: 'AAW**UUUC',
        uan: 'BK26*****709',
        gst: '10AKJHKJG31CIZ5',
        topics: 'We offer a comprehensive range of services encompassing both Static and Dynamic Website Development, Android and iOS App Development, as well as expertise in cross-platform mobile app development using technologies such as Flutter. Our proficiency extends to backend development with languages like C#, Java, and Spring Boot',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = localStorage.getItem('data');
            if (response) {
                setFormData(JSON.parse(response));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('data', JSON.stringify(formData));
        navigate("/print");
    };

    const handleImageChange = (event) => {
        // Image handling logic (uncomment if needed)
    };

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    return (
        <>
        <div className="bgcolor">
            <Box sx={{ display: "flex" }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Card
                        sx={{
                            width: "98%",
                            overflow: "hidden",
                            padding: "12px",
                        }}
                    >
                        <Box height={10} />
                        <Typography variant="h5" align="center">
                            Add Details to Create Certificate
                        </Typography>
                        <div className="w-full max-w-md mx-auto my-10">
                            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                {/* Form fields */}
                                {Object.keys(formData).map((key) => (
                                    <div className="mb-4" key={key}>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </label>
                                        <input
                                            type="text"
                                            name={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                ))}

                                {/* Submit button */}
                                <div className="flex items-center justify-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Card>
                </Box>
            </Box>
        </div>
    </>
);
};

export default AddCandidate;
