
import ShareComponent from "../components/ShareComponent";
import "./share.css"



const share = () => {
    return (

        <>
            <div>
                <ShareComponent
                    symbol="ROXO34"
                    currency="BRL"
                    longName="Nu Holdings Ltd."
                    createdAt="0001-01-01T00:00:00"
                    regularMarketTime="2024-02-20T21:11:00"
                    logourl="https://s3-symbol-logo.tradingview.com/nu-holdings--big.svg"
                    updatedAt={null}


                />

            </div>




        </>



    );


};

export default share;