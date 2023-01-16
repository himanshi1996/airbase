import { useEffect, useState } from "react";
import { Skeleton } from "../Skeleton";
import "./randomListStyle.scss";

export const RandomList = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);
    }, []);

    return (
        <>
            <h3>List</h3>
            <div className="list-container">
                {[1, 2, 3, 4, 5].map((_,index) =>
                    <div className={`card-container`} key={index}>
                        <div className={"header"}>
                            <div className={"img"}>
                                <img src='https://source.unsplash.com/random/200x200?sig=1' />
                                {isLoading && <Skeleton />}
                            </div>

                            <p className={"header-category"}>Random Image{isLoading && <Skeleton />}</p>
                        </div>
                        <div className={"content"}>
                            <p className={"content-name"}>Event Card{isLoading && <Skeleton />}</p>
                            <p className={"content-timing"}>Image created using random image generator{isLoading && <Skeleton />}</p>
                        </div>

                    </div>
                )}
            </div>
        </>

    )
}