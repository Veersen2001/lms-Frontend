import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#fcfcfc] page_404">
            <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center">404</h1>

                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>
                                 
                                <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring cursor-pointer">
                                <span onClick={() => navigate('/')} className="relative block px-8 py-3 link_404">
                                            Go To Homepage
                                            </span>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div> 
        </div>




        // <section className="page_404">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-sm-12 ">
        //                 <div className="col-sm-10 col-sm-offset-1 text-center">
        //                     <div className="four_zero_four_bg">
        //                         <h1 className="text-center">404</h1>

        //                     </div>

        //                     <div className="contant_box_404">
        //                         <h3 className="h2">
        //                             Look like you're lost
        //                         </h3>

        //                         <p>the page you are looking for not avaible!</p>
                                 
        //                         <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring cursor-pointer">
        //                                     <span onClick={() => navigate('/')} className="relative block px-8 py-3 bg-[#1A2238] border border-current">
        //                                     Go Back
        //                                     </span>
        //                         </a>
                                
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}

export default NotFound;