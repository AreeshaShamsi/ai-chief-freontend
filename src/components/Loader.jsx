import React from "react";

export default function Loader({ size = 40, text = "Loading..." }) {
    return (
        <div style={styles.wrapper}>
            <div
                style={{
                    ...styles.spinner,
                    width: size,
                    height: size,
                }}
            />
            {text && <p style={styles.text}>{text}</p>}
        </div>
    );
}

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        width: "100%",
    },
    spinner: {
        border: "4px solid #e5e7eb",
        borderTop: "4px solid #3b82f6",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
    text: {
        marginTop: "10px",
        fontSize: "14px",
        color: "#6b7280",
    },
};