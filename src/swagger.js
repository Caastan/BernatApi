//SWAGGER
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0",
            description: "API for DAW",
            contact: {
                name: "DAW CLASS",
                email: "support@gmail.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            "/api/mamiferos": {
                get: {
                    summary: "Returns all mamiferos from the system that the user has access to",
                    tags: [
                        "mamiferos"
                    ],
                    responses: {
                        200: {
                            description: "A list of mamiferos.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Samba"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Create a new mamifero",
                    tags: [
                        "mamiferos"
                    ],
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        }
                                    },
                                    required: [
                                        "name"
                                    ]
                                },
                                example: {
                                    "name": "Leon"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        201: {
                            description: "The mamifero was successfully created.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "integer",
                                                format: "int64"
                                            },
                                            name: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "id": 11,
                                            "name": "Leon"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            },
            "/api/mamiferos/{id}": {
                get: {
                    summary: "Returns a mamifero from the system that the user has access to",
                    tags: [
                        "mamiferos"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of mamifero to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A mamifero.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Perro"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Updates a mamifero from the system",
                    tags: [
                      "mamiferos"
                    ],
                    parameters: [
                      {
                        name: "id",
                        in: "path",
                        description: "ID of mamifero to update",
                        required: true,
                        type: "integer",
                        format: "int64"
                      }
                    ],
                    requestBody: {
                      required: true,
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              name: {
                                type: "string"
                              }
                            },
                            example: {
                              "name": "Leon"
                            }
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: "A updated mamifero.",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                message: {
                                  type: "string"
                                }
                              },
                              example: {
                                "message": "mamifero updated"
                              }
                            }
                          }
                        }
                      }
                    }
                },
                delete: {
                    summary: "Deletes a mamifero from the system",
                    tags: [
                        "mamiferos"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of mamifero to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A mamifero.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "mamifero borrado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },            
            "/api/peces": {
                get: {
                    summary: "Returns all peces from the system that the user has access to",
                    tags: [
                        "peces"
                    ],
                    responses: {
                        200: {
                            description: "A list of peces.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Besugo"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Create a new pez",
                    tags: [
                        "peces"
                    ],
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        }
                                    },
                                    required: [
                                        "name"
                                    ]
                                },
                                example: {
                                    "name": "Pez Gato"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        201: {
                            description: "The pez was successfully created.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "integer",
                                                format: "int64"
                                            },
                                            name: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "id": 11,
                                            "name": "Pez Gato"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            },
            "/api/peces/{id}": {
                get: {
                    summary: "Returns a pez from the system that the user has access to",
                    tags: [
                        "peces"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of pez to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A pez.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"
                                            }
                                        }, example: {
                                            "name": "Besugo"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Updates a pez from the system",
                    tags: [
                      "peces"
                    ],
                    parameters: [
                      {
                        name: "id",
                        in: "path",
                        description: "ID of pez to update",
                        required: true,
                        type: "integer",
                        format: "int64"
                      }
                    ],
                    requestBody: {
                      required: true,
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              name: {
                                type: "string"
                              }
                            },
                            example: {
                              "name": "Pez Payaso"
                            }
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: "A updated pez.",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                message: {
                                  type: "string"
                                }
                              },
                              example: {
                                "message": "pez updated"
                              }
                            }
                          }
                        }
                      }
                    }
                },
                delete: {
                    summary: "Deletes a pez from the system",
                    tags: [
                        "peces"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of pez to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A pez.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Pez borrado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
    },
    apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Swagger docs disponible en http://localhost:/api/docs`);
}

module.exports = { swaggerDocs };
