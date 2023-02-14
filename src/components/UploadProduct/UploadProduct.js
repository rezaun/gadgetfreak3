import React from 'react';

const UploadProduct = () => {
    const handleUpload=(event)=>{
        event.preventDefault();
        const name = event.target. name.value;
        const price = event.target.price.value;
        console.log(name, price);

    }
    return (
        <div className='container'>
            <h2 className='text-center my-5'>Upload Product</h2>
            <form onSubmit={handleUpload} className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" placeholder='Product Name'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Price</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='price' placeholder='Price'/>
                </div>                
                <button type="submit" class="btn btn-primary">Upload Product</button>
            </form>
        </div>
    );
};

export default UploadProduct;