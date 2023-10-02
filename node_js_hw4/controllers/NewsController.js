import data from '../data.js'

export const getById = (req, res) => {

    const { id } = req.params
    try {

        const dataToSend = data.find(item => item.id == id);

        if (dataToSend) {
            return res.status(200).json({
                status: 'sucess',
                data: dataToSend
            })
        }
        else {
            return res.status(404).json(
                {
                    status: 'fail',
                    message: 'New with that id not found'
                }
            )
        }

    } catch (error) {
        res.status(500).json(
            {
                status: 'fail',
                error
            }
        )

    }
}


export const getNews = (req, res) => {
    try {
        const { page, size } = req.query
        const pageI = Number(page) || 1;
        const sizeI = Number(size) || 5
        const startIndex = (pageI - 1) * sizeI;
        const endIndex = startIndex + sizeI;
        const dataToSend = data.slice(startIndex, endIndex)
        res.status(200).json({
            status: 'sucess',
            data: dataToSend
        })

    } catch (error) {

        res.status(500).json(
            {
                status: 'fail',
                error
            }
        )
    }

}

export const createNew = (req, res) => {
    try {

        const { title, text } = req.body;
        const newId = Math.floor(Math.random() * 999);
        const dataToSend = {
            id: newId,
            title,
            text
        }
        data.push(dataToSend)
        res.status(201).json({
            status: 'sucess',
            data: dataToSend
        })

    } catch (error) {

        res.status(500).json(
            {
                status: 'fail',
                error
            }
        )
    }
}
export const editNew = (req, res) => {
    try {
        const { id } = req.params;
        const userInput = req.body;
        const dataToEdit = data.find(item => item.id == id)
        if (dataToEdit) {

            for (const [key, value] of Object.entries(userInput)) {
                dataToEdit[key] = value
            }

            res.status(200).json(
                {
                    status: 'sucess',
                    data: dataToEdit
                }
            )
        }
        else {

            return res.status(404).json(
                {
                    status: 'fail',
                    message: 'New with that id not found'
                }
            )
        }

    } catch (error) {

        res.status(500).json(
            {
                status: 'fail',
                error
            }
        )
    }
}
export const deleteNew = (req, res) => {
    try {
        const { id } = req.params;


        const dataIndex = data.findIndex(item => item.id == id);

        if (dataIndex !== -1) {

            data.splice(dataIndex, 1);

            res.status(200).json({
                status: 'success',
                message: 'Item deleted successfully'
            });
        } else {
            return res.status(404).json({
                status: 'fail',
                message: 'New with that id not found'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            error
        });
    }
}