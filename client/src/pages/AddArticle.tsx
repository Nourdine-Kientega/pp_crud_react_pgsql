import { useState } from "react";

const AddArticle = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [content, setContent] = useState('');

    const handleSubmit = async (e: any) => {


        const article = { title, author, description, image, content };

        e.preventDefault();

        const res = await fetch('http://localhost:3000');

        const data = await res.json();

        console.log(data);
        

        console.log('Submit', article);
        
    };



    // id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    // image VARCHAR(255),
    // title VARCHAR(255) NOT NULL,
    // description VARCHAR(255),
    // author VARCHAR(100),
    // content TEXT NOT NULL,
    // created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    // updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

  return (
    <div className="container">
    <h1 className="text-center mt-4 mb-5">Add new blog</h1>
    {/* <Searbar /> */}
    <div className="row">
        <div className="col-6 mx-auto card p-4">
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

    <div className="row gap-5 w-100">
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
    </div>
</div>
  )
}

export default AddArticle;