function initializeCoreMod() {
    return {
        "BambooBlockTransformer": {
            "target": {
                "type": "CLASS",
                "name": "net.minecraft.block.BambooBlock"
            },
            "transformer": function (classNode) {
                var Opcodes = Java.type("org.objectweb.asm.Opcodes");
                method = classNode.visitMethod(Opcodes.ACC_PUBLIC, "func_220080_a",
                    "(Lnet/minecraft/block/BlockState;Lnet/minecraft/world/IBlockReader;Lnet/minecraft/util/math/BlockPos;)F",
                    null, null);

                method.visitCode();
                method.visitInsn(Opcodes.FCONST_1);
                method.visitInsn(Opcodes.FRETURN);
                method.visitEnd();

                return classNode;
            }
        }
    }
}