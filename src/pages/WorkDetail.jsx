import { Link,useParams } from "react-router-dom"
import {work} from '../../data'

const WorkDetail = () => {
  let {title} = useParams()
  // let {category} = useParams()
  
  const item = work.find((item) => item.title === title);
  // const categoryItems = work.filter((item) => item.category === category)
  const randomItem1 = Math.floor(work.length * Math.random())
  const randomItem2 = Math.ceil(work.length * Math.random())
  
  

  return (
    <div className="mt-10">
      
      {item 
      ? (
          <div className="flex flex-col gap-10">
            <div id="heading" className="">
              <h1 className="text-2xl uppercase">{title}</h1>
              {/* <p>Description: {item.description}</p> */}
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
              <div className="mt-10 mb-10">
                <p className="text-3xl">Overview</p>
                <p className="font-light text-gray-800 mt-5 mb-10 leading-relaxed">{item.overview}</p>
              </div>
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