{
    let before = new Date(2020, 10,15)
    let after = new Date(2020, 10, 20)

    let oneDay = 1000 * 60 * 60 *24

    let days = (after - before) / oneDay
    console.log(days)
}