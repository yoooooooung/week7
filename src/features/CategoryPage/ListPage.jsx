import React from 'react';
import styled from 'styled-components';


const ListPage = () => {
    return (
    <ListPageLayout>
        <Top>
            <div>총 815건</div>
            <FilterSelect>
                <span><a href="#">추천순</a></span>
                <span><a href="#">신상품순</a></span>
                <span><a href="#">판매량순</a></span>
                <span><a href="#">혜택순</a></span>
                <span><a href="#">낮은 가격순</a></span>
                <span><a href="#">높은 가격순</a></span>
            </FilterSelect>
        </Top>
        <List>
            <Box>
                <Img>
                    <img src={require('../../img/shinsang_list1.avif')} />
                    <button>
                        <img src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='} alt="" />
                    </button>
                </Img>
                <Desc>
                    <Deliver>샛별배송</Deliver>
                    <Name>[그래놀라 하우스] 그래놀라 5종</Name>
                    <Price>13,500원</Price>
                    <Info>짧은 설명</Info>

                </Desc>
            </Box>
            <Box>
                <Img>
                    <img src={require('../../img/shinsang_list1.avif')} />
                    <button>
                        <img src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='} alt="" />
                    </button>
                </Img>
                <Desc>
                    <Deliver>샛별배송</Deliver>
                    <Name>[그래놀라 하우스] 그래놀라 5종</Name>
                    <Price>13,500원</Price>
                    <Info>짧은 설명</Info>

                </Desc>
            </Box>
            <Box>
                <Img>
                    <img src={require('../../img/shinsang_list1.avif')} />
                    <button>
                        <img src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='} alt="" />
                    </button>
                </Img>
                <Desc>
                    <Deliver>샛별배송</Deliver>
                    <Name>[그래놀라 하우스] 그래놀라 5종</Name>
                    <Price>13,500원</Price>
                    <Info>짧은 설명</Info>

                </Desc>
            </Box>
            <Box>
                <Img>
                    <img src={require('../../img/shinsang_list1.avif')} />
                    <button>
                        <img src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='} alt="" />
                    </button>
                </Img>
                <Desc>
                    <Deliver>샛별배송</Deliver>
                    <Name>[그래놀라 하우스] 그래놀라 5종</Name>
                    <Price>13,500원</Price>
                    <Info>짧은 설명</Info>

                </Desc>
            </Box>
            <Box>
                <Img>
                    <img src={require('../../img/shinsang_list1.avif')} />
                    <button>
                        <img src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='} alt="" />
                    </button>
                </Img>
                <Desc>
                    <Deliver>샛별배송</Deliver>
                    <Name>[그래놀라 하우스] 그래놀라 5종</Name>
                    <Price>13,500원</Price>
                    <Info>짧은 설명</Info>

                </Desc>
            </Box>
        </List>
    </ListPageLayout>
    );
}


export default ListPage;

const ListPageLayout = styled.div `
width:783px;
height: 569px;
/* background-color:lightgray; */

a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
}
`;

const FilterSelect = styled.div``;
const Top = styled.div`
display: flex;
justify-content: space-between;
padding-bottom:20px;

& > div {
    font-size: 14px;
    font-weight: 500;
    color: rgb(51, 51, 51);
}

${FilterSelect} {
    display:flex;
    justify-content: flex-end;

    span {
    display: flex;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    font-size: 14px;
    color: rgb(153, 153, 153);
    cursor: pointer;
    }
    span::after {
    content: "";
    display: flex;
    width: 1px;
    height: 10px;
    margin:0 8px;
    background-color: rgb(226, 226, 226);
}
}

`;

const Box = styled.div``;
const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 249px);
    gap: 24px 18px;
    width: 100%;

${Box} {
height: 538px;
}   
`;


const Img = styled.div`
position:relative;
& > img {
    width:249px;
    height:320px;
    object-fit: cover;
}
button {
    position:absolute;
    bottom:16px;
    right:16px;
    border:none;
    background-color:transparent;
img {
    width:45px;
    height:45px;
    object-fit:cover;
}
}
`;

const Deliver = styled.div``;
const Name = styled.div``;
const Price = styled.div``;
const Info = styled.div``;
const Desc = styled.div`
padding: 14px 0 2px;
font-size:14px;
${Deliver} {
    color:#999999;
}

${Name} {
    font-size:16px;
    margin-bottom:10px;
}
${Price} {
    font-size:16px;
    font-weight:700;
}
${Info} {
    margin-top:12px;
    font-size:12px;
    color:#999999;
}
`;
