// Copyright 2017 The gachain-front Authors
// This file is part of the gachain-front library.
// 
// The gachain-front library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// The gachain-front library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public License
// along with the gachain-front library. If not, see <http://www.gnu.org/licenses/>.

import 'rxjs';
import 'lib/external/fsa';
import { Action } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { moveTag } from '../actions';
import moveTagEpic from './moveTagEpic';
import dependencies from 'modules/dependencies';
import { TProtypoElement } from 'gachain/protypo';
import { TConstructorTreeElement } from 'gachain/editor';
import mockStore from 'test/mockStore';

describe('moveTagEpic', () => {
    it('move tag', () => {

        const action$ = ActionsObservable.of<Action>(moveTag.started({
            tag: {
                tag: 'form',
                children: [
                    {
                        tag: 'label',
                        children: [
                            {
                                tag: 'text',
                                text: 'Lastname:',
                                id: 'tag_9'
                            }
                        ],
                        id: 'tag_8',
                        childrenText: 'Lastname:'
                    },
                    {
                        tag: 'input',
                        attr: {
                            'class': 'form-control',
                            name: 'sample input'
                        },
                        id: 'tag_10'
                    },
                    {
                        tag: 'button',
                        children: [
                            {
                                tag: 'text',
                                text: 'Submit',
                                id: 'tag_12'
                            }
                        ],
                        id: 'tag_11',
                        childrenText: 'Submit'
                    }
                ],
                id: 'tag_7',
                childrenText: null
            },
            destinationTagID: 'tag_0',
            position: 'before'
        }));

        const jsonData: TProtypoElement[] = [
            {
                tag: 'form',
                children: [
                    {
                        tag: 'label',
                        children: [
                            {
                                tag: 'text',
                                text: 'Lastname:',
                                id: 'tag_9'
                            }
                        ],
                        id: 'tag_8',
                        childrenText: 'Lastname:'
                    },
                    {
                        tag: 'input',
                        attr: {
                            'class': 'form-control',
                            name: 'sample input'
                        },
                        id: 'tag_10'
                    },
                    {
                        tag: 'button',
                        children: [
                            {
                                tag: 'text',
                                text: 'Submit',
                                id: 'tag_12'
                            }
                        ],
                        id: 'tag_11',
                        childrenText: 'Submit'
                    }
                ],
                id: 'tag_15',
                childrenText: null
            },
            {
                tag: 'image',
                attr: {
                    alt: 'Image',
                    src: '/img/dummy.png'
                },
                id: 'tag_0'
            },
            {
                tag: 'p',
                attr: {
                    'class': 'text-primary'
                },
                children: [
                    {
                        tag: 'text',
                        text: 'Paragraph text here',
                        id: 'tag_2'
                    }
                ],
                id: 'tag_1',
                childrenText: 'Paragraph text here'
            },
            {
                tag: 'form',
                children: [
                    {
                        tag: 'label',
                        children: [
                            {
                                tag: 'text',
                                text: 'Firstname:',
                                id: 'tag_5'
                            }
                        ],
                        id: 'tag_4',
                        childrenText: 'Firstname:'
                    },
                    {
                        tag: 'input',
                        attr: {
                            'class': 'form-control',
                            name: 'sample input'
                        },
                        id: 'tag_6'
                    }
                ],
                id: 'tag_3',
                childrenText: null
            },
            {
                tag: 'table',
                id: 'tag_13',
                attr: {
                    source: 'keysStr',
                    columns: 'KEY_ID=id,MONEY=amount'
                }
            }
        ];

        const treeData: TConstructorTreeElement[] = [
            {
                title: 'form',
                children: [
                    {
                        title: 'label: Lastname:',
                        children: null,
                        expanded: true,
                        id: 'tag_8',
                        selected: false,
                        logic: false,
                        canMove: true,
                        canDrop: true,
                        tag: {
                            tag: 'label',
                            children: [
                                {
                                    tag: 'text',
                                    text: 'Lastname:',
                                    id: 'tag_9'
                                }
                            ],
                            id: 'tag_8',
                            childrenText: 'Lastname:'
                        }
                    },
                    {
                        title: 'input',
                        children: null,
                        expanded: true,
                        id: 'tag_10',
                        selected: false,
                        logic: false,
                        canMove: true,
                        canDrop: false,
                        tag: {
                            tag: 'input',
                            attr: {
                                'class': 'form-control',
                                name: 'sample input'
                            },
                            id: 'tag_10'
                        }
                    },
                    {
                        title: 'button: Submit',
                        children: null,
                        expanded: true,
                        id: 'tag_11',
                        selected: false,
                        logic: false,
                        canMove: true,
                        canDrop: true,
                        tag: {
                            tag: 'button',
                            children: [
                                {
                                    tag: 'text',
                                    text: 'Submit',
                                    id: 'tag_12'
                                }
                            ],
                            id: 'tag_11',
                            childrenText: 'Submit'
                        }
                    }
                ],
                expanded: true,
                id: 'tag_15',
                selected: false,
                logic: false,
                canMove: true,
                canDrop: true,
                tag: {
                    tag: 'form',
                    children: [
                        {
                            tag: 'label',
                            children: [
                                {
                                    tag: 'text',
                                    text: 'Lastname:',
                                    id: 'tag_9'
                                }
                            ],
                            id: 'tag_8',
                            childrenText: 'Lastname:'
                        },
                        {
                            tag: 'input',
                            attr: {
                                'class': 'form-control',
                                name: 'sample input'
                            },
                            id: 'tag_10'
                        },
                        {
                            tag: 'button',
                            children: [
                                {
                                    tag: 'text',
                                    text: 'Submit',
                                    id: 'tag_12'
                                }
                            ],
                            id: 'tag_11',
                            childrenText: 'Submit'
                        }
                    ],
                    id: 'tag_15',
                    childrenText: null
                }
            },
            {
                title: 'image',
                children: null,
                expanded: true,
                id: 'tag_0',
                selected: false,
                logic: false,
                canMove: true,
                canDrop: false,
                tag: {
                    tag: 'image',
                    attr: {
                        alt: 'Image',
                        src: '/img/dummy.png'
                    },
                    id: 'tag_0'
                }
            },
            {
                title: 'p: Paragraph text here',
                children: null,
                expanded: true,
                id: 'tag_1',
                selected: false,
                logic: false,
                canMove: true,
                canDrop: true,
                tag: {
                    tag: 'p',
                    attr: {
                        'class': 'text-primary'
                    },
                    children: [
                        {
                            tag: 'text',
                            text: 'Paragraph text here',
                            id: 'tag_2'
                        }
                    ],
                    id: 'tag_1',
                    childrenText: 'Paragraph text here'
                }
            },
            {
                title: 'form',
                children: [
                    {
                        title: 'label: Firstname:',
                        children: null,
                        expanded: true,
                        id: 'tag_4',
                        selected: false,
                        logic: false,
                        canMove: true,
                        canDrop: true,
                        tag: {
                            tag: 'label',
                            children: [
                                {
                                    tag: 'text',
                                    text: 'Firstname:',
                                    id: 'tag_5'
                                }
                            ],
                            id: 'tag_4',
                            childrenText: 'Firstname:'
                        }
                    },
                    {
                        title: 'input',
                        children: null,
                        expanded: true,
                        id: 'tag_6',
                        selected: false,
                        logic: false,
                        canMove: true,
                        canDrop: false,
                        tag: {
                            tag: 'input',
                            attr: {
                                'class': 'form-control',
                                name: 'sample input'
                            },
                            id: 'tag_6'
                        }
                    }
                ],
                expanded: true,
                id: 'tag_3',
                selected: false,
                logic: false,
                canMove: true,
                canDrop: true,
                tag: {
                    tag: 'form',
                    children: [
                        {
                            tag: 'label',
                            children: [
                                {
                                    tag: 'text',
                                    text: 'Firstname:',
                                    id: 'tag_5'
                                }
                            ],
                            id: 'tag_4',
                            childrenText: 'Firstname:'
                        },
                        {
                            tag: 'input',
                            attr: {
                                'class': 'form-control',
                                name: 'sample input'
                            },
                            id: 'tag_6'
                        }
                    ],
                    id: 'tag_3',
                    childrenText: null
                }
            },
            {
                title: 'table',
                children: null,
                expanded: true,
                id: 'tag_13',
                selected: false,
                logic: false,
                canMove: true,
                canDrop: false,
                tag: {
                    tag: 'table',
                    id: 'tag_13',
                    attr: {
                        source: 'keysStr',
                        columns: 'KEY_ID=id,MONEY=amount'
                    }
                }
            }
        ];

        const expectedOutput: any = [
            {
                payload: {
                    params: {
                        tag: {
                            tag: 'form',
                            children: [
                                {
                                    tag: 'label',
                                    children: [
                                        {
                                            tag: 'text',
                                            text: 'Lastname:',
                                            id: 'tag_9'
                                        }
                                    ],
                                    id: 'tag_8',
                                    childrenText: 'Lastname:'
                                },
                                {
                                    tag: 'input',
                                    attr: {
                                        'class': 'form-control',
                                        name: 'sample input'
                                    },
                                    id: 'tag_10'
                                },
                                {
                                    tag: 'button',
                                    children: [
                                        {
                                            tag: 'text',
                                            text: 'Submit',
                                            id: 'tag_12'
                                        }
                                    ],
                                    id: 'tag_11',
                                    childrenText: 'Submit'
                                }
                            ],
                            id: 'tag_7',
                            childrenText: null
                        },
                        destinationTagID: 'tag_0',
                        position: 'before'
                    },
                    result: {
                        jsonData: jsonData,
                        treeData: treeData
                    }
                },
                type: 'editor/MOVE_TAG_DONE'
            }
        ];

        dependencies.constructorModule.idGenerator.setCounter(15);

        moveTagEpic(action$, mockStore, { constructorModule: dependencies.constructorModule })
            .toArray()
            .subscribe(actualOutput => {
                expect(actualOutput).toEqual(expectedOutput);
            });
    });
});