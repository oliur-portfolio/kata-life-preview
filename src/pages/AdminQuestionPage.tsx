import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";

const AdminQuestionPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="admin-question-area">
      <div className="section__heading">
        <h1 className="font--24">Admin - Questions</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="custom__btn custom__btn--default"
        >
          Create new
        </button>
      </div>

      <div className="search-area">
        <div className="search__input">
          <input
            type="text"
            className="input__style-search"
            placeholder="Search question.."
          />

          <button className="search__input-icon">
            <img src="/images/search.svg" alt="" />
          </button>
        </div>

        <button className="filter-btn">
          <img src="/images/filter.svg" alt="filter" />
        </button>
      </div>

      {/* Question Items */}
      <div className="question__items">
        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}
      </div>
      {/* Question Items */}

      {/* Modal Area */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="modal-dialog"
      >
        <DialogBackdrop transition className="modal-backdrop" />

        <div className="modal-container">
          <DialogPanel transition className="modal-panel">
            <div className="modal__header">
              <h3 className="font--18">Edit Question</h3>

              <button
                onClick={() => setIsOpen(false)}
                className="modal__close-btn"
              >
                <img src="/images/close.svg" alt="" />
              </button>
            </div>

            <div className="modal__form-area">
              <form action="" className="modal__form">
                <div className="input__fields">
                  {/* Single Input */}
                  <div className="input__field">
                    <input
                      className="input__style"
                      type="text"
                      placeholder="Write Question"
                    />
                  </div>
                  {/* Single Input */}

                  {/* Single Input */}
                  <div className="input__field">
                    <input
                      className="input__style"
                      type="text"
                      placeholder="Write Category"
                    />
                  </div>
                  {/* Single Input */}

                  {/* Single Input */}
                  <div className="input__field">
                    <input
                      className="input__style"
                      type="text"
                      placeholder="Write Sub Category"
                    />
                  </div>
                  {/* Single Input */}

                  {/* Single Input */}
                  <div className="input__field">
                    <input
                      className="input__style"
                      type="text"
                      placeholder="Write Type"
                    />
                  </div>
                  {/* Single Input */}
                </div>

                <button className="custom__btn custom__btn--default custom__btn--center">
                  Save
                </button>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      {/* Modal Area */}
    </section>
  );
};

export default AdminQuestionPage;
