import { useState } from "react"

const Iframe = () => {
    const [showIframe, setShowIframe] = useState(false)

    return (
        <>
            { showIframe
                ? (
                    <iframe
                        id="cr-iframe"
                        title="ContractReader.io iframe example"
                        width="800"
                        height="1200"
                        src="https://contractreader.io/contract/mainnet/0x30535831e3244dc15153ce173c2803af4ee7e374"
                    />
                )
                : (
                    <button
                        onClick={() => setShowIframe(true)}
                        style={{
                            textDecoration: 'underline',
                            display: "inherit",
                            margin: "24px auto",
                            border: "1px solid black",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            color: "white",
                            backgroundColor: "black",
                        }}
                    >
                        Show ContractReader
                    </button>
                )
            }
        </>
    )
}

export default Iframe
