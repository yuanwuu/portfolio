import { Link,useParams } from "react-router-dom"
import {work} from '../../data'

const WorkDetail = () => {
  let {title} = useParams()
  // let {category} = useParams()
  
  const item = work.find((item) => item.title === title);
  // const categoryItems = work.filter((item) => item.category === category)
  const randomItem1 = Math.floor(work.length * Math.random())
  const randomItem2 = Math.round(work.length * Math.random())
  
  

  return (
    <div className="mt-10">
      
      {item 
      ? (
          <div className="flex flex-col gap-10">
            <div id="heading" className="">
              <h1 className="text-2xl uppercase">{title}</h1>
              <p>Description: {item.description}</p>
            </div>
            <div id="subhead" className="flex justify-between w-full">
              <div>
                <p>Category</p>
                <p>{item.category}</p>
              </div>
              <div>
                <p>Year</p>
                <p>{item.year}</p>
              </div>
              <div>
                <p>Link</p>
                <Link to={item.link} className='cursor-pointer'>Visit Project</Link>
              </div>
            </div>
            <div id="content">
              <img src={item.img} alt="" />
              {/* <div>
                <p className="text-3xl">Overview</p>
                <p className="font-thin text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis reiciendis animi distinctio corporis laboriosam consequuntur repudiandae unde assumenda! Architecto molestias voluptas suscipit voluptatem, placeat doloremque repudiandae! Velit, dolorum. <br />
                Cumque illo, minima eligendi non rerum dolorum eveniet perspiciatis sit aut praesentium? Id eveniet culpa ab possimus harum modi et doloribus dolorum doloremque velit pariatur obcaecati tenetur iusto beatae architecto rum optio tempora nobis qui eum cumque possimus doloremque quisquam dolore itaque asperiores consequatur ratione pariatur dolorem eius, error nemo unde quibusdam? Saepe, dolorem consequuntur necessitatibus ea consequatur suscipit quaerat sunt aspernatur.</p>
                <ul>
                  <li>blah blah blah</li>
                  <li>blah blah blah</li>
                  <li>blah blah blah</li>
                </ul>
                <img src="" alt="" className="w-full h-1/4" />
                <p className="text-3xl">Challenge</p>
                <p className="font-thin text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis reiciendis animi distinctio corporis laboriosam consequuntur repudiandae unde assumenda! Architecto molestias voluptas suscipit voluptatem, placeat doloremque repudiandae! Velit, dolorum. </p>
                <ul>
                  <li>blah blah blah</li>
                  <li>blah blah blah</li>
                  <li>blah blah blah</li>
                </ul>
                <p className="text-3xl">Results</p>
                <p className="font-thin text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis reiciendis animi distinctio corporis laboriosam consequuntur repudiandae unde assumenda! Architecto molestias voluptas suscipit voluptatem, placeat doloremque repudiandae! Velit, dolorum. </p>
                <ul>
                  <li>blah blah blah</li>
                  <li>blah blah blah</li>
                  <li>blah blah blah</li>
                </ul>
              </div> */}
            </div>
            <div id="otherWorks" className="">
              <p className="font-bold uppercase text-3xl m-3 ">other works</p>
              <div className="grid grid-cols-2 gap-3">
              <div id="work1">
                <Link to={`/work/${work[randomItem1].title}`} className="cursor-pointer">
                  <img src={work[randomItem1].img} alt="" />
                </Link>
            </div>
            <div id="work2">
                <Link to={`/work/${work[randomItem2].title}`} className="cursor-pointer">
                  <img src={work[randomItem2].img} alt="" />
                </Link>
            </div>
              </div>
            </div>
          </div>
      ) : (
        <p>Sorry, no item found with that title.</p>
      )}
    </div>
  );
};


export default WorkDetail