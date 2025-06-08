import propTypes  from "prop-types";

function Link(props) {
    console.log(props)
    const {title, content}= props
  return (
    <>
      <div>
        <li>
          <a href="https://react.dev/">{title}</a>
        </li>
        <p>
         {content}
        </p>
      </div>
    </>
  );
}


Link.propTypes={
    title:propTypes.string,
    content:propTypes.string
}


export default Link;
