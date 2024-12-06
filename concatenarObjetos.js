const user = {
    name: 'Luis',
    age: 21
}

const profession = {
    job: 'Engineer',
    xp: 5
}

const userinfo = {
    ...user,
    ...profession
}

console.log(userinfo)