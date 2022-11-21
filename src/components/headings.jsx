import React from "react";

const RenderHeadings = () => {
    const headings = [
        "Имя",
        "Качества",
        "Профессия",
        "Встретился (раз)",
        "Оценка",
        "Закладки",
        "Удалить"
    ];

    // headings.map((heading) => console.log(heading));

    return headings.map((heading) => (
        <th scope="col" key={heading}>
            {heading}
        </th>
    ));
};

export default RenderHeadings;
