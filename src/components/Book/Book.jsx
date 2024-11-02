import React from 'react';

const Book = ({ book }) => {
    const { image, bookName, author, tags } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl mb-8">
            <figure className="px-10 pt-10 bg-gray-200 pb-4">
                <img
                    src={image}
                    alt={bookName}
                    className="rounded-xl h-[200px]" />
            </figure>
            <div className='flex gap-8 justify-center'>
                {
                    tags.map(tag => <span className='border-2 border-purple-600 px-4 py-1 rounded-xl mt-4 text-purple-700 font-semibold btn'>{tag}</span>)
                }
            </div>

            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <div className='flex justify-between items-center'>
                    <span className='font-semibold '>Fiction</span>

                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>

                </div>
                <div className="card-actions flex justify-center mt-4">
                    <button className="btn btn-primary px-24 text-md font-semibold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Book;