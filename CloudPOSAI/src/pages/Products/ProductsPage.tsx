import Dropdown from "../../components/items/Dropdown";

const treeData = [
    {
        title: 'Region 1',
        value: 'region1',
        key: 'region1',
        children: [
            {
                title: 'Branch 1',
                value: 'branch1',
                key: 'branch1',
            },
            {
                title: 'Branch 2',
                value: 'branch2',
                key: 'branch2',
            },
        ],
    },
    {
        title: 'Region 2',
        value: 'region2',
        key: 'region2',
        children: [
            {
                title: 'Branch 3',
                value: 'branch3',
                key: 'branch3',
            },
        ],
    },
];

export default function ProductsPage() {
    return (
        <div>
            <h1>Products</h1>
            <Dropdown treeData={treeData} />
        </div>
    )
}