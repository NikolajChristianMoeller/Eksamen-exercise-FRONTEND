export default function DeleteModal({deleteTarget, handleDelete}){
    return(
       <div className="modal fade" id="delete-modal" tabIndex="-1" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="delete-modal-label">Delete {deleteTarget.Name} (ID: {deleteTarget.ID})</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body alert alert-danger">
                Are you sure you want to delete <span className="fw-bold">{deleteTarget.Name}</span> from the database?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(deleteTarget)} data-bs-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>
    )
}