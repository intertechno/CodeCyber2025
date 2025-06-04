export default function Square({ size }: { size: number }) {
    return (
        <div style={{
            width: size, height: size,
            backgroundColor: "blue", color: "white"
        }}>
            My text here</div>
    );
}

/*
export default function Square(props: any) {
    console.log(props);
    return (
        <div style={{
            width: props.size, height: props.size,
            backgroundColor: "blue", color: "white"
        }}>
            My text here</div>
    );
}
*/