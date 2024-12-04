import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="singlePostImg"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>John Doe</b>
          </span>
          <span className="singlePostDate">2 hrs. ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, optio
          incidunt? Tempore atque explicabo eos quam omnis eum. Modi, labore
          earum! Tempora accusamus ullam id impedit, iste harum error voluptas!
          Quibusdam excepturi neque labore laboriosam distinctio laborum illum
          beatae alias culpa velit perspiciatis, fugit impedit harum officia
          deleniti assumenda libero sit praesentium corrupti qui ducimus
          mollitia consequatur repellendus voluptatum. Modi. Fugit praesentium
          dolorem laudantium modi odio aliquid quod et voluptates? Eligendi vero
          impedit dolorum sapiente similique eveniet, numquam dolorem autem
          perspiciatis eos consectetur, aliquam accusantium magni quia iure aut
          est. Mollitia eligendi provident, repellat soluta reiciendis, quos,
          iure alias fugit maiores nesciunt non qui enim eos voluptatem illo
          quaerat quasi ex deserunt error inventore! Possimus libero totam modi
          consequuntur beatae! Optio beatae sint, voluptatibus consequatur modi
          consequuntur, aliquam deleniti cumque incidunt est inventore
          similique, nulla tenetur nisi rem. Laudantium ab facere praesentium
          minus recusandae, blanditiis omnis a. Neque, nisi tempora.
        </p>
      </div>
    </div>
  );
}
