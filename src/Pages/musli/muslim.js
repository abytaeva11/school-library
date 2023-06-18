import React from 'react';
import img from '../musli/img/surot.svg'
import img2 from '../musli/img/log2.svg'
import {AiFillStar} from "react-icons/ai";
import './musim.scss'

const Muslim = () => {
    return (
        <div id='musa '>
            <div className="container">
                <h1 className='ml-0 mb-14'>Отзывы</h1>
                <div className="mus flex justify-around mb-8">
                    <div className="musa">
                        <div className="musa-block flex">
                            <img src={img} alt="img" className='mr-2 ml-3 mb-3'/>
                            <div className="musa-img">
                                <h4 className='pt-3'>Muslim Bolot</h4>
                                <h5>09.09.22</h5>
                                <p className='flex items-center mt-0'><AiFillStar className='text-yellow-500' /> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500' /> <AiFillStar  className='text-yellow-500' /> <AiFillStar   className='text-yellow-500'/> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500' /> <AiFillStar  className='text-yellow-500 mr-2'/>10 / 10</p>
                            </div>
                        </div>
                        <p className='mt-2 ml-4'>Oрганизованность сайта направление <br/>
                            и навигация по материалам. А так же <br/>
                            актуальность материалов</p>

                    </div>
                    <div className="musa">
                        <div className="musa-block flex">
                            <img src={img2} alt="img" className='mr-2 ml-3 mb-3'/>
                            <div className="musa-img">
                                <h4 className='pt-3'>Muslim Bolot</h4>
                                <h5>09.09.22</h5>
                                <p className='flex items-center mt-0'><AiFillStar className='text-yellow-500' /> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500' /> <AiFillStar  className='text-yellow-500' /> <AiFillStar   className='text-yellow-500'/> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500' /> <AiFillStar  className='text-yellow-500 mr-2'/>10 / 10</p>
                            </div>
                        </div>
                        <p className='mt-2 ml-4'>Oрганизованность сайта направление <br/>
                            и навигация по материалам. А так же <br/>
                            актуальность материалов</p>

                    </div>
                    <div className="musa">
                        <div className="musa-block flex">
                            <img src={img} alt="img" className='mr-2 ml-3 mb-3'/>
                            <div className="musa-img">
                                <h4 className='pt-3'>Muslim Bolot</h4>
                                <h5>09.09.22</h5>
                                <p className='flex items-center mt-0'><AiFillStar className='text-yellow-500' /> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500' /> <AiFillStar  className='text-yellow-500' /> <AiFillStar   className='text-yellow-500'/> <AiFillStar  className='text-yellow-500'/> <AiFillStar  className='text-yellow-500' /> <AiFillStar  className='text-yellow-500 mr-2'/>10 / 10</p>
                            </div>
                        </div>
                        <p className='mt-2 ml-4'>Oрганизованность сайта направление <br/>
                            и навигация по материалам. А так же <br/>
                            актуальность материалов</p>

                    </div>
                </div>


            </div>


        </div>
    );
};

export default Muslim;