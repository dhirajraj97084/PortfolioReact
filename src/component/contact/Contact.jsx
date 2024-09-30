import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const ContactForm = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        fullname: '',
        emailAddress: '',
        message: ''
    });

    // Handler for input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form reload

        const UserInfo = {
            fullname: formData.fullname,
            emailAddress: formData.emailAddress,
            message: formData.message
        };

        try {
            // Replace with your actual Getform endpoint URL
            await axios.post('https://getform.io/f/bkkgqvrb', UserInfo);
            toast.success("Your message was sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("There was an issue sending your message. Please try again.");
        }

        // Reset the form fields after submission
        setFormData({
            fullname: '',
            emailAddress: '',
            message: ''
        });
    };

    return (
        <div>
            <div name="contact" className="main px-8 md:px-16 lg:px-[12rem] ">
                <div className="heading pt-4">
                    <h1 className='flex justify-center text-2xl md:text-4xl lg:text-5xl font-black'>Contact Me</h1>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" className="flex justify-center md:py-6 lg:py-8">
                    <div className="px-8 py-4 rounded-lg bg-white shadow-xl max-w-lg w-full">
                        <form onSubmit={handleSubmit}>
                            {/* Full Name Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="fullname">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Email Address Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="emailAddress">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="emailAddress"
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message"
                                    className="w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
