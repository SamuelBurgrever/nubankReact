import { useEffect, useState } from "react";
import { ShareRequestProps } from "../interfaces/ShareRequestProps";
import { consultaAcaoPorCodigo } from "../services/ShareAPI";

export const ShareComponent: React.FC<ShareRequestProps> = ({ symbol }) => {
    const [share, setShareData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        consultaAcaoPorCodigo(symbol)
            .then((response) => {
                setShareData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [symbol]);
    if (loading) return <div> Loading ...</div>;
    if (error) return <div> Error: {error}</div>;

    return (
        <>
            <div>
                <img src={share?.logourl} alt={`${symbol}`} width={100} />
                <h1>{share.currency}</h1>
                <h2>{share.shortName}</h2>
                <h1>{share?.longName}</h1>
                

                <div>
                    <h2>{share?.createdAt}</h2>
                    <h2>{share?.regularMarketTime}</h2>
                    <h2>{share?.logourl}</h2>
                    <h3>{share?.updatedAt}</h3>
                </div>

                


            </div>
        </>
    );
};

export default ShareComponent;