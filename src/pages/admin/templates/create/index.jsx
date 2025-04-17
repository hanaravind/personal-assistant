import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../../../../config";

const PostForm = () => {
  const [type, setSelectedType] = useState("birthday");
  const [message, setMessage] = useState("");
  const [templates, setTemplates] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type.trim() || !message.trim()) {
      alert("Type and message cannot be empty!");
      return;
    }
    createTemplate()
    setSelectedType("");
    setMessage("");
  };

    const createTemplate = async () => {
      try {
        const payload = { type, message, isDefault: true }
        const res = await axios.post(`${API_URL}/admin/create`, payload);
        setTimeout(() => {
            navigate('/admin/templates')
        }, 300)
      } catch (error) {
        console.log(error)
      }
    };

    const handleChange = (event) => {
        setSelectedType(event.target.value);
    };

  return (
    <div className="max-w-lg relative mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <h2 className="text-2xl font-semibold mb-4">Create a Template</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="fruit-select">Choose a template type: </label>
            <select
                style={{ border: '1px solid black' }}
                id="fruit-select"
                value={type}
                defaultValue={'birthday'}
                onChange={handleChange}
            >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            rows="5"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      <div onClick={() => navigate('/admin/templates')} className="bg-black absolute sm:cursor-pointer rounded-[50%] -top-[12px] -right-[14px] py-1 px-[10px] text-white">X</div>
    </div>
  );
};

export default PostForm;
