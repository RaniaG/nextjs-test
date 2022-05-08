import { GetStaticProps } from "next"
import React from "react";
import data from "../api/posts.json";
import { post } from "./interfaces/post";

export default function List({ list }: { list?: post[] }): JSX.Element {
    return <ul>
        { list?.map(e => <li key={e.id}>{e.title}</li>)}
    </ul>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const list: post[] = data;
    return {
        props: {
            list
        }
    }
}
