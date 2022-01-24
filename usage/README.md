# Usage

### `add`

Install a shortkut pack using the `add` command.

A shortkut pack is simply a bundle of aliases.

Aliases can be multi-line functions.

```sh
# Add the shortkut pack for the yarn package manager.
shortkut add yarn
```

#### Custom Shortkuts

You can create a custom alias like so:

```sh
shortkut add ferris="cargo run"
```

> Additional arguments passed into the alias are **always** passed on.

> `ferris --release` would run `cargo run --release`

### `remove`

Remove a shortkut pack using the `remove` command.

This removes all the associated aliases to the shortkut pack.

```sh
# Remove the shortkut pack for npm.
shortkut remove npm
```

#### Removing Custom Shortkuts

You can remove a custom alias like so:

```sh
shortkut remove ferris="cargo run"
```

### `show`

Show the list of aliases present inside a shortkut pack.

Here's an example:

```sh
$ shortkut show cargo
shortkut 1.0.0 show
cn = cargo new
cr = cargo run
crr = cargo run --release
cc = cargo check
cb = cargo build
cbr = cargo build --release
```

This means that when you run `cn`, it runs `cargo new`.

### `search`

Search for shortkut packs using the `search` command.

```sh
$ shortkut search flutter
flutter
Found 1 shortcut in 1.70s
```
