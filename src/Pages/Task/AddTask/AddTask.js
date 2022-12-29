import React from 'react';

const AddTask = () => {
    return (
        <div>
            <h2>Add</h2>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <textarea className="textarea" placeholder="Bio"></textarea>
            </div>
        </div>
    );
};

export default AddTask;