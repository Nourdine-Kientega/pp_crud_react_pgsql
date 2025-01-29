import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [content, setContent] = useState('');
    const [successAdded, setSuccessAdded] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append('title', title);
        formData.append('author', author);
        formData.append('description', description);
        formData.append('content', content);

        if(image) { // check that image exists
            formData.append('image', image); 
        }

        try {
                    
            const res = await fetch('http://localhost:3000/articles', {
                method: 'POST',
                body: formData
            });   
  
            if(res.ok) {
                setSuccessAdded(true);

                // reset fields values
                setImage(null);
                setTitle('');
                setDescription('');
                setAuthor('');
                setContent('');

                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }

        } catch (error) {
            console.log('Error to fetch POST article: ', error);
        }
        
    };
    
  return (
    <div className="container">
        <h1 className="text-center mt-4 mb-5">Add new blog</h1>
        {/* <Searbar /> */}
        <div className="row">
            <div className="col-6 mx-auto card p-4">
            { successAdded && <div className="alert alert-success text-center">Article Added successfuly !</div>}
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="title" className="form-label"><strong>Title:</strong></label>
                        <input type="text" className="form-control" id="title" placeholder="Article title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="col">
                        <label htmlFor="author" className="form-label"><strong>Author:</strong></label>
                        <input type="text" className="form-control" id="author" placeholder="Article title" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Description:</strong></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={1} placeholder="Description of article" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div className="col mb-3">
                    <label htmlFor="formFile" className="form-label"><strong>Blog image:</strong></label>
                    <input className="form-control" type="file" id="formFile" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Content:</strong></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Writte your article content here..." value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>

                <input type="submit" className="btn btn-primary" value='Add article'/>
            </form>
            </div>
        </div>
    </div>
  )
}

export default AddArticle;